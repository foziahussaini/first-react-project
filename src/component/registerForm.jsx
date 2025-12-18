import { useState } from "react";

function registerForm() {
    const [FirstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    return(
        <>
        <input value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <input value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </>
    )
}

export default registerForm;