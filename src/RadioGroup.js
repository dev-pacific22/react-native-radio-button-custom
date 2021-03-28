import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RadioButton = ({ item, index, onPress }) => {
  const [selected, setSelected] = useState(item.selected);

  useEffect(() => {
    setSelected(item.selected);
  }, [item]);
  const onButtonPress = () => {
    setSelected(!selected);
    onPress(item, index);
  };
  return (
    <>
      <TouchableOpacity
        style={[styles.itemContainerStyle, selected && styles.itemSelected]}
        key={index}
        onPress={onButtonPress}
      >
        <Text
          style={[styles.itemLabelStyle, selected && styles.selectedLabelStyle]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const RadioGroup = ({ items, containerStyle, onItemSelect }) => {
  const [data, setData] = useState(items);

  const onRadioButtonPress = (item, index) => {
    const newData = data.map((element, index) =>
      element?.id === item.id
        ? { ...element, selected: true }
        : { ...element, selected: false }
    );
    setData(newData);
    onItemSelect(item, index);
  };
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {data.map((element, index) => (
        <RadioButton
          item={element}
          index={index}
          onPress={onRadioButtonPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexWrap: "wrap",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  itemContainerStyle: {
    alignSelf: "flex-start",
    height: 40,
    paddingHorizontal: 10,
    marginTop: 12,
    marginRight: 7,
    borderWidth: 0.5,
    borderColor: "#232323",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 15,
  },
  itemSelected: {
    backgroundColor: "#2381AA",
    borderWidth: 0,
  },
  selectedLabelStyle: {
    color: "#CDCDCD",
  },

  itemLabelStyle: {
    fontSize: 16,
    color: "#232323",
  },
});

RadioGroup.propTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
};

export { RadioGroup };
export default RadioGroup;
