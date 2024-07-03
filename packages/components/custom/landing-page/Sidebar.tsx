import { LinkText, Link } from '@app-launch-kit/components/primitives/link';
import { VStack } from '@app-launch-kit/components/primitives/vstack';

function LandingPageSidebar() {
  return (
    <VStack className="md:hidden p-4">
      <Link
        className="group font-medium px-3 py-2 flex items-center "
        href="https://docs.applaunchk.it/"
      >
        <LinkText className="text-primary-700 group-hover/link:text-primary-900 group-active/link:text-primary-900 no-underline group-hover:underline">
          Docs
        </LinkText>
      </Link>

      <Link
        className="group font-medium px-3  py-2 flex items-center "
        href="https://applaunchk.it/#demo-video"
      >
        <LinkText className="text-primary-700 group-hover/link:text-primary-900 group-active/link:text-primary-900 no-underline group-hover:underline">
          Demo
        </LinkText>
      </Link>

      <Link
        className="group font-medium px-3  py-2 flex items-center "
        href="https://applaunchk.it/#pricing"
      >
        <LinkText className="text-primary-700 group-hover/link:text-primary-900 group-active/link:text-primary-900 no-underline group-hover:underline">
          Pricing
        </LinkText>
      </Link>
      <Link className="group font-medium px-3 py-2 flex items-center" href="/">
        <LinkText className="text-primary-700 group-hover/link:text-primary-900 group-active/link:text-primary-900 no-underline group-hover:underline">
          Buy Now
        </LinkText>
      </Link>
    </VStack>
  );
}

export default LandingPageSidebar;
