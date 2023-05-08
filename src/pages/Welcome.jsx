import React from "react";
import hse from '../assets/hse.png'
import operateur from '../assets/operateur.png'
import superviseur from '../assets/superviseur.png'
import { Link, Route, Routes, Navigate } from "react-router-dom";

import '../App.css'
import { Card, Grid } from '@mui/material'


const Welcome = () => {

    return (
        <>
            <p style={{ textAlign: "center" }}> You are a :</p>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={4} >
                    <Link to="/HSE"  >

                        <Card style={{
                            boxSizing: "borderBox",
                            height: "290px",
                            width: "auto",
                            border: "1px solid #DDE4EB",
                            borderRadius: "8px",
                            backgroundColor: "#FFFFFF",
                            boxShadow: " 0 0 0 0 rgba(90,113,208,0.11)",
                        }}>
                            <img src={hse}></img>
                        </Card>
                        HSE
                    </Link>
                </Grid>
                    <Grid item xs={6} sm={4} md={4} >
                <Link

                    to="/Operateur"

                >

                        <Card style={{
                            boxSizing: "borderBox",
                            height: "290px",
                            width: "auto",
                            border: "1px solid #DDE4EB",
                            borderRadius: "8px",
                            backgroundColor: "#FFFFFF",
                            boxShadow: " 0 0 0 0 rgba(90,113,208,0.11)",
                        }}>
                            <img src={operateur}></img>
                        </Card>
                        Operateur
                </Link>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} >
                <Link

                    to="/superviseur"

                >

                        <Card style={{
                            boxSizing: "borderBox",
                            height: "290px",
                            width: "auto",
                            border: "1px solid #DDE4EB",
                            borderRadius: "8px",
                            backgroundColor: "#FFFFFF",
                            boxShadow: " 0 0 0 0 rgba(90,113,208,0.11)",
                        }}>
                            <img src={superviseur}></img>
                        </Card>
                        Superviseur
                </Link>
                    </Grid>
            </Grid>
        </>
    )
}
export default Welcome;