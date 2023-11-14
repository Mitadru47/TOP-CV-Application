import React from "react";

function Field(props){

    return (
        
        <div id={props.input + "-component"}>

            <label htmlFor={props.input}>{props.label}</label>
            <input 

                id={props.input} 
                name={props.input} 
                
                value={props.value} 
                onChange={props.onChange}
                
            ></input>

        </div>
    );
}

function Button(props){
    return (
    
        <div id={props.name + "-component"}>
            <button id={props.name} onClick={props.handleClick}>{props.name}</button>
        </div>
    );
}

function Text(props){
    return <div id={props.id + "-textComponent"}>{props.text}</div>;
}

function General(){

    const [nameValue, setNameValue] = React.useState("");

    const [emailValue, setEmailValue] = React.useState("");
    const [phoneValue, setPhoneValue] = React.useState("");

    const [submitState, setSubmitState] = React.useState(false);

    function clickEvent_Edit(event){

        event.preventDefault();
        console.log("Edit Mode!");

        setSubmitState((prevValue) => !(prevValue));
    }

    function clickEvent_Submit(event){

        event.preventDefault();
        console.log("Submitted!");

        setSubmitState((prevValue) => !(prevValue));
    }

    if(!submitState){

        return (

            <div id="general">

                <div id="top-section">

                    <Field 
                    
                        key="0" 

                        label="Name:" 
                        input="name" 

                        value={nameValue} 
                        onChange={(event) => {
                        
                            // console.log(event.target.value);
                            setNameValue(event.target.value);
                        }}
                    
                    />

                    <Field 
                    
                        key="1" 
                        
                        label="Email:" 
                        input="email" 
                    
                        value={emailValue}
                        onChange={(event) => setEmailValue(event.target.value)}
                    />

                    <Field 
                        
                        key="2" 
                    
                        label="Phone Number:" 
                        input="phone" 
                    
                        value={phoneValue}
                        onChange={(event) => setPhoneValue(event.target.value)}
                    />

                </div>

                <Button key="3" name="Submit" handleClick={clickEvent_Submit} />
                
            </div>
        );
    
    } else if(submitState){

        return (

            <div id="general">

                <div id="top-section">

                    <Text key="0" id="name" text={nameValue} />
                    <Text key="1" id="email" text={emailValue} />
                    <Text key="2" id="phone" text={phoneValue} />

                </div>

                <Button key="3" name="Edit" handleClick={clickEvent_Edit} />

            </div>
        );
    }
}

export default General;