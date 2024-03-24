import React from "react";
import { Grid, Box, TextField } from "@mui/material";
import AddressCard from "../AddressCrd/AddressCard";
import Button from "@mui/material/Button"; // Import Button from MUI instead of react-bootstrap

function DeliveryAddressForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber"),
        };
        console.log("address", address);
    };

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCard />
                        <Button
                            className="mt-2 bg-purple-700 text-white hover:bg-purple-800 hover:text-gray-100 rounded-md p-3"
                            size="large"
                            variant="contained"
                        >
                            Deliver Here
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        label="First Name"
                                        name="firstName"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        fullWidth
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        label="Address"
                                        name="address"
                                        fullWidth
                                        autoComplete="address-line1"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        label="City"
                                        name="city"
                                        fullWidth
                                        autoComplete="address-level2"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        label="State"
                                        name="state"
                                        fullWidth
                                        autoComplete="address-level1"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        label="Zip / Postal Code"
                                        name="zip"
                                        fullWidth
                                        autoComplete="postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        label="Phone Number"
                                        name="phoneNumber"
                                        fullWidth
                                        autoComplete="tel"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        className="mt-2 bg-purple-700 text-white hover:bg-purple-800 hover:text-gray-100 rounded-md p-3"
                                        size="large"
                                        variant="contained"
                                        type="submit"
                                    >
                                        Deliver Here
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default DeliveryAddressForm;


