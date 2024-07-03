import { supabase } from '@app-launch-kit/utils/lib/supabase';
import * as ImagePicker from 'expo-image-picker';

export const handleImageResult = async (result: any, setImage: any) => {
  if (result.canceled || !result.assets || result.assets.length === 0) {
    console.log('User cancelled image picker.');
    return;
  }
  const image = result.assets[0];
  setImage(image.uri);
};

export const uploadImage = async (imageUri: string, imageType: string) => {
  try {
    if (!imageUri) {
      throw new Error('No image uri!');
    }
    const arraybuffer = await fetch(imageUri).then((res) => res.arrayBuffer());
    const mimeType = 'image/jpeg';
    const fileExt = mimeType.split('/')[1] || 'jpeg';
    const path = `${Date.now()}.${fileExt}`;
    const { data, error: uploadError } = await supabase.storage
      .from(imageType)
      .upload(path, arraybuffer, {
        contentType: mimeType,
      });
    if (uploadError) {
      throw uploadError;
    }
    // return data.path;
    // temporary till policies are not implemented
    const { data: returnedData } = await supabase.storage
      .from(imageType)
      .getPublicUrl(data.path);
    return returnedData.publicUrl;
    //
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      throw error;
    }
  } finally {
  }
};

export const deleteImage = async (imagePath: string, imageType: string) => {
  try {
    if (!imagePath) {
      throw new Error('No image path!');
    }
    const { error: deleteError } = await supabase.storage
      .from(imageType)
      .remove([imagePath]);
    if (deleteError) {
      throw deleteError;
    }
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      throw error;
    }
  } finally {
  }
};

export const pickImage = async (setImage: any) => {
  const image = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    base64: true,
  });

  handleImageResult(image, setImage);
};

export const handleSignout = async () => {
  supabase.auth.signOut();
};

const transformProductPlanData = (
  data:
    | {
        id: any;
        active: any;
        description: any;
        unit_amount: any;
        currency: any;
        type: any;
        interval: any;
        product: {
          name: any;
          image: any;
          description: any;
        }[];
      }[]
    | null
): {
  id: any;
  active: any;
  description: any;
  unit_amount: any;
  currency: any;
  type: any;
  interval: any;
  product: {
    name: any;
    image: any;
    description: any;
  } | null;
}[] => {
  if (data)
    return data.map((item: any) => ({
      ...item,
      unit_amount: item.unit_amount / 100,
    }));
  else {
    return [];
  }
};

// export const fetchSingleProductPlanData = async (id: any, setData: any) => {
//   try {
//     const { data: productPlanData, error } = await supabase
//       .from('prices')
//       .select(
//         `
//         id,active,description,unit_amount,currency,type,interval,
//         product:product_id (
//           name,
//           image,
//           description
//         )
//       `
//       )
//       .filter('id', 'eq', id);

//     if (error) {
//       console.error('Error fetching data:', error);
//       return null;
//     }

//     // Transform the unit_amount
//     const transformedData = productPlanData.map((item) => ({
//       ...item,
//       unit_amount: item.unit_amount / 100,
//     }));

//     setData(transformedData[0]); // Return the first item since we're fetching by id
//   } catch (error) {
//     console.error('Error fetching prices:', error);
//     // return null;
//   }
// };

export const productPlanData = async (
  setData: any,
  setSubscriptionIntervals: any
) => {
  try {
    const { data: productAndPricesData, error } = await supabase.from('prices')
      .select(`
       id,active,description,unit_amount,currency,type,interval,
       product:product_id (
        name,
        image,
        description
      )
    `);
    if (productAndPricesData) {
      const distinctIntervals = [
        // @ts-ignore
        ...new Set(productAndPricesData.map((item: any) => item.interval)),
      ];
      distinctIntervals.sort((a, b) => a.localeCompare(b));

      const formattedIntervals = distinctIntervals.map((interval, index) => ({
        id: index + 1,
        interval_title: `per ${interval}`,
        interval_type: interval,
      }));
      setSubscriptionIntervals(formattedIntervals);
    }
    if (error) {
      console.error('Error fetching data:', error);
    }
    const transformedData = transformProductPlanData(productAndPricesData).sort(
      (a, b) => a?.product?.name.localeCompare(b?.product?.name)
    );
    setData(transformedData);
  } catch (error) {
    console.error('Error fetching prices:', error);
  }
};

export const fetchUserProfile = async (userID: any) => {
  try {
    const { data: profile, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userID)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return profile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

export const getSubscriptionStatus = async (userID: any) => {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userID);
    if (error) {
      throw new Error(error.message);
    }
    return data[0];
  } catch (error) {
    console.error('Error fetching user subscription status:', error);
    return null;
  }
};

export const downloadImage = async (imagePath: string, imageType: string) => {
  try {
    if (!imagePath) {
      throw new Error('No image path!');
    }
    const { data, error } = await supabase.storage
      .from(imageType)
      .download(imagePath);

    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error(`Error downloading ${imageType}:`, error);
    return null;
  }
};

export const getReadableImageResult = (imageData: any) => {
  return new Promise((resolve, reject) => {
    if (!imageData) {
      resolve(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageData);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });
};
