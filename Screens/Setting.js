import React from "react";
import { TextInput, Stack } from "@react-native-material/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Setting = () => {
  return (
    <Stack>
    <TextInput variant="standard" label="Application language" style={{ margin: 16 }} />
    <TextInput 
    variant="standard" 
    label="Content language" 
    style={{ margin: 16 }} />
    </Stack>
  
  )
}

export default Setting