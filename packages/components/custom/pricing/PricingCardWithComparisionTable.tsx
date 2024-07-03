import React from 'react';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Box } from '@app-launch-kit/components/primitives/box';
import {
  Button,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { Icon, CheckIcon } from '@app-launch-kit/components/primitives/icon';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import {
  Table,
  TableBody,
  TableData,
  TableFooter,
  TableRow,
} from '@app-launch-kit/components/primitives/table';
import {
  headers,
  rows,
} from '@app-launch-kit/utils/constants/comparisionTableData';

const PricingCardWithComparisionTable = () => {
  return (
    <ScrollView>
      <VStack className="bg-background-0 justify-center items-center gap-20 p-6 md:p-9">
        <Box className="gap-5 md:max-w-xl">
          <Heading className="font-roboto text-typography-900 text-4xl md:text-5xl tracking-[0.2px] md:text-center">
            Pricing & Plans
          </Heading>
          <Text className="font-roboto text-typography-400 text-base md:text-center">
            Lorem ipsum dolor sit amet consectetur. Pellentesque at sapien vel
            eget massa consequat parturient volutpat. eget massa consequat
            parturient volutpat.
          </Text>
        </Box>

        <ScrollView horizontal>
          <Table>
            <TableBody>
              <TableRow className="border-b-0">
                <TableData></TableData>
                {headers.map((plan, index) => (
                  <TableData
                    key={index}
                    useRNView
                    className={`text-center ${plan.isHighlighted ? 'bg-background-50 rounded-t-xl' : ''}`}
                  >
                    <VStack className="items-center gap-6 pb-[32px] pt-6">
                      <Text className="font-roboto text-typography-900 font-medium">
                        {plan.name}
                      </Text>
                      <Box className="gap-1 items-center">
                        <Text className="font-roboto text-typography-950 text-4xl font-semibold">
                          {plan.price}
                        </Text>
                        <Text className="font-roboto text-xs text-typography-400">
                          {plan.interval}
                        </Text>
                      </Box>
                    </VStack>
                  </TableData>
                ))}
              </TableRow>

              {rows.map((feature, featureIndex) => (
                <TableRow
                  key={featureIndex}
                  className="border-b border-outline-100"
                >
                  <TableData className="py-4 text-typography-950 font-semibold font-roboto">
                    {feature.name}
                  </TableData>

                  {headers.map((header, headerIndex) => {
                    const value =
                      feature[header.accessor as keyof typeof feature];

                    return (
                      <TableData
                        key={headerIndex}
                        className={`py-4 text-center text-typography-900 font-roboto text-sm font-normal leading-[21px] ${header.isHighlighted ? 'bg-background-50' : ''}`}
                        useRNView={value === '✓'}
                      >
                        {value === '✓' ? (
                          <Icon
                            as={CheckIcon}
                            className="m-auto text-background-900"
                          />
                        ) : (
                          value
                        )}
                      </TableData>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableData></TableData>
                {headers.map((plan, index) =>
                  plan.isHighlighted ? (
                    <TableData
                      key={index}
                      useRNView
                      className="pt-[60px] bg-background-50 rounded-b-xl"
                    >
                      <Button
                        size="sm"
                        className="mx-auto bg-info-500 border-info-300 hover:bg-info-600 hover:border-info-400 active:bg-info-400 active:border-info-500 data-[focus-visible=true]:web:ring-info-300 group/button "
                      >
                        <ButtonText className="text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0 font-roboto">
                          Get Started
                        </ButtonText>
                      </Button>
                    </TableData>
                  ) : (
                    <TableData key={index} useRNView className="pt-[60px]">
                      <Button
                        className="mx-auto group/button  bg-background-100 hover:bg-background-200 active:bg-background-100 data-[focus-visible=true]:web:ring-background-200"
                        size="sm"
                      >
                        <ButtonText className="font-roboto text-typography-900 group-hover/button:text-typography-900 group-active/button:text-typography-900">
                          Get Started
                        </ButtonText>
                      </Button>
                    </TableData>
                  )
                )}
              </TableRow>
            </TableFooter>
          </Table>
        </ScrollView>
      </VStack>
    </ScrollView>
  );
};

export default PricingCardWithComparisionTable;
