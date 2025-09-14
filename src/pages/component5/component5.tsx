import { useState } from "react";
import { useForm, Controller, type SubmitHandler, type UseFormSetValue } from "react-hook-form";
import {
    Button,
    Box,
    Typography,
    FormHelperText,
    Alert,
    Snackbar,
    CircularProgress,
    Card,
    CardContent
} from "@mui/material";
import "./component5.css";
import SharedTextField from "../../shared/SharedTextField";
import SharedSelect from "../../shared/SharedSelect";
import SharedCheckbox from "../../shared/SharedCheckbox";

interface FormValues {
    firstName: string;
    lastName: string;
    goToMairie: boolean;
    peopleCountMairie: number | null;
    childrenCountMairie: number | null;
    goToParty: boolean;
    peopleCountParty: number | null;
    childrenCountParty: number | null;
    goToChabbathNight: boolean;
    peopleCountChabbathNight: number | null;
    childrenCountChabbathNight: number | null;
    goToChabbathDay: boolean;
    peopleCountChabbathDay: number | null;
    childrenCountChabbathDay: number | null;
    cannotAssist: boolean;
    message: string;
    // virtual field just to show a group validation message
    checkboxGroupValidation?: boolean;
}

export default function MonFormulaire() {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        getValues,
        reset,
        trigger
    } = useForm<FormValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            goToMairie: false,
            peopleCountMairie: null,
            childrenCountMairie: null,
            goToParty: false,
            peopleCountParty: null,
            childrenCountParty: null,
            goToChabbathNight: false,
            peopleCountChabbathNight: null,
            childrenCountChabbathNight: null,
            goToChabbathDay: false,
            peopleCountChabbathDay: null,
            childrenCountChabbathDay: null,
            cannotAssist: false,
            message: "",
            checkboxGroupValidation: undefined
        },
        shouldFocusError: true
    });

    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [loading, setLoading] = useState(false);

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const TO = import.meta.env.VITE_TO;

    function resetFields(setValue: UseFormSetValue<FormValues>) {
        setValue("goToMairie", false);
        setValue("peopleCountMairie", null);
        setValue("childrenCountMairie", null);
        setValue("goToParty", false);
        setValue("peopleCountParty", null);
        setValue("childrenCountParty", null);
        setValue("goToChabbathNight", false);
        setValue("peopleCountChabbathNight", null);
        setValue("childrenCountChabbathNight", null);
        setValue("goToChabbathDay", false);
        setValue("peopleCountChabbathDay", null);
        setValue("childrenCountChabbathDay", null);
    }

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log("Données soumises :", data);

        const emailData = {
            firstName: data.firstName,
            lastName: data.lastName,
            goToMairie: data.goToMairie,
            peopleCountMairie: data.peopleCountMairie,
            childrenCountMairie: data.childrenCountMairie,
            goToParty: data.goToParty,
            peopleCountParty: data.peopleCountParty,
            childrenCountParty: data.childrenCountParty,
            goToChabbathNight: data.goToChabbathNight,
            peopleCountChabbathNight: data.peopleCountChabbathNight,
            childrenCountChabbathNight: data.childrenCountChabbathNight,
            goToChabbathDay: data.goToChabbathDay,
            peopleCountChabbathDay: data.peopleCountChabbathDay,
            childrenCountChabbathDay: data.childrenCountChabbathDay,
            cannotAssist: data.cannotAssist,
            message: data.message
        };

        setLoading(true);
        try {
            const response = await fetch(
                `${BACKEND_URL}/api/email/send/weeding?to=${encodeURIComponent(TO)}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(emailData)
                }
            );
            if (!response.ok) {
                throw new Error(`Erreur lors de l'envoi: ${response.statusText}`);
            }
            const result = await response.text();
            console.log("Réponse du serveur :", result);
            setOpen(true);
            setLoading(false);
            reset();
        }
        catch (error) {
            console.error("Erreur lors de l'envoi de l'e-mail :", error);
            setOpenError(true);
            setLoading(false);
        }
    };

    const goToMairie = watch("goToMairie");
    const goToParty = watch("goToParty");
    const goToChabbathNight = watch("goToChabbathNight");
    const goToChabbathDay = watch("goToChabbathDay");

    const validateCheckboxes = () => {
        const values = getValues();
        return (
            values.goToMairie ||
            values.goToParty ||
            values.goToChabbathNight ||
            values.goToChabbathDay ||
            values.cannotAssist ||
            "Vous devez sélectionner au moins une option."
        );
    };

    const renderSelectOptions = () => {
        const options = [];
        for (let i = 0; i <= 10; i++) {
            options.push({ value: i, label: i });
        }
        return options;
    };

    return (
        <Box className="homePage5">
            <Card className="card5">
                <CardContent>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Typography variant="h4" gutterBottom align="center" sx={{ color: "var(--color-primary)", fontFamily: "var(--font-title)" }}>
                            Réponse
                        </Typography>

                        <SharedTextField
                            name="firstName"
                            control={control}
                            label="Prénom"
                            rules={{ required: "Le prénom est obligatoire" }}
                        />

                        <SharedTextField
                            name="lastName"
                            control={control}
                            label="Nom"
                            rules={{ required: "Le nom est obligatoire" }}
                        />

                        <Typography variant="h6" sx={{ mt: 2, fontFamily: "var(--font-title)" }}>
                            Participation :
                        </Typography>

                        {import.meta.env.VITE_SHOW_MAIRIE === 'true' && (
                            <SharedCheckbox
                                name="goToMairie"
                                control={control}
                                label="Assisteront à la mairie"
                                onChange={(e) => {
                                    trigger([
                                        "goToMairie",
                                        "goToParty",
                                        "goToChabbathNight",
                                        "goToChabbathDay",
                                        "cannotAssist"
                                    ]);
                                    setValue("goToMairie", e.target.checked);
                                    setValue("cannotAssist", false);
                                }}
                            />
                        )}
                        {goToMairie && (
                            <>
                                <SharedSelect
                                    name="peopleCountMairie"
                                    control={control}
                                    label="Nombre d'adultes"
                                    rules={{ required: "Veuillez indiquer le nombre d'adultes" }}
                                    options={renderSelectOptions()}
                                />
                                <SharedSelect
                                    name="childrenCountMairie"
                                    control={control}
                                    label="Nombre d'enfants"
                                    rules={{ required: "Veuillez indiquer le nombre d'enfants" }}
                                    options={renderSelectOptions()}
                                />
                            </>
                        )}

                        {import.meta.env.VITE_SHOW_PARTY === 'true' && (
                            <SharedCheckbox
                                name="goToParty"
                                control={control}
                                label="Assisteront à la réception"
                                onChange={(e) => {
                                    trigger([
                                        "goToMairie",
                                        "goToParty",
                                        "goToChabbathNight",
                                        "goToChabbathDay",
                                        "cannotAssist"
                                    ]);
                                    setValue("goToParty", e.target.checked);
                                    setValue("cannotAssist", false);
                                }}
                            />
                        )}
                        {goToParty && (
                            <>
                                <SharedSelect
                                    name="peopleCountParty"
                                    control={control}
                                    label="Nombre d'adultes"
                                    rules={{ required: "Veuillez indiquer le nombre d'adultes" }}
                                    options={renderSelectOptions()}
                                />
                                <SharedSelect
                                    name="childrenCountParty"
                                    control={control}
                                    label="Nombre d'enfants"
                                    rules={{ required: "Veuillez indiquer le nombre d'enfants" }}
                                    options={renderSelectOptions()}
                                />
                            </>
                        )}

                        {import.meta.env.VITE_SHOW_CHABBATH_NIGHT === 'true' && (
                            <SharedCheckbox
                                name="goToChabbathNight"
                                control={control}
                                label="Assisteront au Vendredi soir"
                                onChange={(e) => {
                                    trigger([
                                        "goToMairie",
                                        "goToParty",
                                        "goToChabbathNight",
                                        "goToChabbathDay",
                                        "cannotAssist"
                                    ]);
                                    setValue("goToChabbathNight", e.target.checked);
                                    setValue("cannotAssist", false);
                                }}
                            />
                        )}
                        {goToChabbathNight && (
                            <>
                                <SharedSelect
                                    name="peopleCountChabbathNight"
                                    control={control}
                                    label="Nombre d'adultes"
                                    rules={{ required: "Veuillez indiquer le nombre d'adultes" }}
                                    options={renderSelectOptions()}
                                />
                                <SharedSelect
                                    name="childrenCountChabbathNight"
                                    control={control}
                                    label="Nombre d'enfants"
                                    rules={{ required: "Veuillez indiquer le nombre d'enfants" }}
                                    options={renderSelectOptions()}
                                />
                            </>
                        )}

                        {import.meta.env.VITE_SHOW_CHABBATH_DAY === 'true' && (
                            <SharedCheckbox
                                name="goToChabbathDay"
                                control={control}
                                label="Assisteront au Samedi midi"
                                onChange={(e) => {
                                    trigger([
                                        "goToMairie",
                                        "goToParty",
                                        "goToChabbathNight",
                                        "goToChabbathDay",
                                        "cannotAssist"
                                    ]);
                                    setValue("goToChabbathDay", e.target.checked);
                                    setValue("cannotAssist", false);
                                }}
                            />
                        )}
                        {goToChabbathDay && (
                            <>
                                <SharedSelect
                                    name="peopleCountChabbathDay"
                                    control={control}
                                    label="Nombre d'adultes"
                                    rules={{ required: "Veuillez indiquer le nombre d'adultes" }}
                                    options={renderSelectOptions()}
                                />
                                <SharedSelect
                                    name="childrenCountChabbathDay"
                                    control={control}
                                    label="Nombre d'enfants"
                                    rules={{ required: "Veuillez indiquer le nombre d'enfants" }}
                                    options={renderSelectOptions()}
                                />
                            </>
                        )}

                        {import.meta.env.VITE_SHOW_CANNOT_ASSIST === 'true' && (
                            <SharedCheckbox
                                name="cannotAssist"
                                control={control}
                                label="Ne pourront pas assister"
                                onChange={(e) => {
                                    setValue("cannotAssist", e.target.checked);
                                    if (e.target.checked) {
                                        resetFields(setValue);
                                    }
                                }}
                            />
                        )}

                        <Controller
                            name="checkboxGroupValidation"
                            control={control}
                            rules={{ validate: validateCheckboxes }}
                            render={() => (
                                <FormHelperText error={!!errors.checkboxGroupValidation}>
                                    {errors.checkboxGroupValidation?.message}
                                </FormHelperText>
                            )}
                        />

                        <SharedTextField
                            name="message"
                            control={control}
                            label="Message"
                            placeholder="Mazal tov !"
                        />

                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={loading}
                                sx={{
                                    width: "100%",
                                    backgroundColor: loading ? "#ccc" : "#1976d2",
                                    textTransform: "none"
                                }}
                            >
                                {loading ? (
                                    <CircularProgress size={24} sx={{ color: "#fff" }} />
                                ) : (
                                    "Envoyer"
                                )}
                            </Button>
                        </Box>

                        <Snackbar
                            open={open}
                            autoHideDuration={3000}
                            onClose={() => setOpen(false)}
                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        >
                            <Alert severity="success" variant="filled">
                                Votre réponse a été envoyée !
                            </Alert>
                        </Snackbar>
                        <Snackbar
                            open={openError}
                            autoHideDuration={3000}
                            onClose={() => setOpenError(false)}
                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        >
                            <Alert severity="error" variant="filled">
                                Une erreur est survenue lors de l'envoi de l'e-mail. Veuillez réessayer.
                            </Alert>
                        </Snackbar>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
