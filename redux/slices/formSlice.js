import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basicInfo: {
        brandName: "",
        industryType: "",
        productOrServiceType: "",
        targetAudience: "",
    },
    productServiceDetails: {
        features: [],
        USPs: [],
        primaryProblemSolved: "",
    }
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateBasicInfo: (state, action) => {
            state.basicInfo = { ...state.basicInfo, ...action.payload };
        },
        updateProductDetails: (state, action) => {
            state.productServiceDetails = { ...state.productServiceDetails, ...action.payload };
        },
        addFeature: (state, action) => {
            state.productServiceDetails.features.push(action.payload);
        },
        removeFeature: (state, action) => {
            state.productServiceDetails.features = state.productServiceDetails.features.filter(
                (_, index) => index !== action.payload
            );
        },
        addUSP: (state, action) => {
            state.productServiceDetails.USPs.push(action.payload);
        },
        removeUSP: (state, action) => {
            state.productServiceDetails.USPs = state.productServiceDetails.USPs.filter(
                (_, index) => index !== action.payload
            );
        },
        resetForm: () => initialState
    }
});

export const {
    updateBasicInfo,
    updateProductDetails,
    addFeature,
    removeFeature,
    addUSP,
    removeUSP,
    resetForm
} = formSlice.actions;
export default formSlice.reducer;