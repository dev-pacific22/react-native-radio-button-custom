import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const RadioButton = ({ item, index, onPress, custom, buttonProps }) => {
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
      {custom ? (
        <TouchableOpacity
          style={[styles.itemContainerStyle, selected && styles.itemSelected]}
          key={index}
          onPress={onButtonPress}
        >
          <Text
            style={[
              {...styles.itemLabelStyle,  ...buttonProps.labelStyle},
              selected &&
              buttonProps.selectedLabelStyle
                && buttonProps.selectedLabelStyle
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onButtonPress}
          style={[styles.radioButtonStyle, buttonProps?.radioButtonStyle]}
        >
          <Image
            style={styleFactory(buttonProps).iconStyle}
            source={
              selected
                ? require("./assets/selected.png")
                : require("./assets/unselected.png")
            }
          />
          <Text
            style={[
              {...styles.itemLabelStyle,  ...buttonProps.labelStyle},
              selected && buttonProps.selectedLabelStyle
                && buttonProps.selectedLabelStyle,
            ]}
          >
            {item?.name}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const RadioGroup = ({
  items,
  containerStyle,
  onItemSelect,
  orientation = "vertical",
  custom = false,
  ...props
}) => {
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
    <View
      style={[
        styles.containerStyle,
        containerStyle,
        orientation === "horizontal" && { flexDirection: "row" },
      ]}
    >
      {data.map((element, index) => (
        <View key={index}>
          <RadioButton
            item={element}
            index={index}
            onPress={onRadioButtonPress}
            custom={custom}
            buttonProps={props}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexWrap: "wrap",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  itemContainerStyle: {
    alignSelf: "flex-start",
    height: 40,
    paddingHorizontal: 10,
    marginTop: 10,
    marginHorizontal: 7,
    borderWidth: 0.5,
    borderColor: "#232323",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 15,
  },
  itemSelected: {
    backgroundColor: "#026",
    borderWidth: 0,
  },
  selectedLabelStyle: {
    color: "#CDCDCD",
  },

  itemLabelStyle: {
    fontSize: 16,
    color: "#232323",
    paddingLeft: 5,
  },
  radioButtonStyle: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

const styleFactory = (props) =>
  StyleSheet.create({
    iconStyle: {
      height: props?.buttonSize || 15,
      width: props?.buttonSize || 15,
      tintColor: props?.buttonColor || "#2351AA",
    },
  });

RadioGroup.propTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
  orientation: PropTypes.string,
  buttonColor: PropTypes.string,
  labelStyle: PropTypes.object,
  selectedLabelStyle: PropTypes.object,
  custom: PropTypes.bool
};

export { RadioGroup };
export default RadioGroup;
