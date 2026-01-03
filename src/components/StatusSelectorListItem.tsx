import Colors from '@/constants/Colors';
import { OrderStatusList, Tables } from "@/types";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

type OrderListItemProps = {
  order: Tables<"orders">;
  updateStatus: (status: string) => void;
};

const StatusSelectorListItem = ({
  order,
  updateStatus,
}: OrderListItemProps) => {
  const [status, setStatus] = useState(order.status);
  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>Status</Text>
      <View style={{ flexDirection: "row", gap: 5 }}>
        {OrderStatusList.map((each_status) => (
          <Pressable
            key={each_status}
            onPress={() => {
              updateStatus(status);
            }}
            style={{
              borderColor: Colors.light.tint,
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              marginVertical: 10,
              backgroundColor:
                order.status === each_status
                  ? Colors.light.tint
                  : "transparent",
            }}
          >
            <Text
              style={{
                color:
                  order.status === each_status ? "white" : Colors.light.tint,
              }}
            >
              {each_status}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default StatusSelectorListItem