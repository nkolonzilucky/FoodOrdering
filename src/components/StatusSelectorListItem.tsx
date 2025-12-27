import Colors from '@/constants/Colors';
import { OrderStatusList, Tables } from "@/types";
import React from 'react';
import { Pressable, Text, View } from 'react-native';

type OrderListItemProps = {
  order: Tables<"orders">;
};

const StatusSelectorListItem = ({order}: OrderListItemProps) => {
  return (
    <View>
          <Text style={{ fontWeight: "bold" }}>Status</Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            {OrderStatusList.map((status) => (
              <Pressable
                key={status}
                onPress={() => console.warn("Update status")}
                style={{
                  borderColor: Colors.light.tint,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 5,
                  marginVertical: 10,
                  backgroundColor:
                    order.status === status ? Colors.light.tint : "transparent",
                }}
              >
                <Text
                  style={{
                    color:
                      order.status === status ? "white" : Colors.light.tint,
                  }}
                >
                  {status}
                </Text>
              </Pressable>
            ))}
          </View>
   
    </View>
  );
}

export default StatusSelectorListItem