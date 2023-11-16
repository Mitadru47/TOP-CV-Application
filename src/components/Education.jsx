import React from "react";

function Field(props){
    return (

        <div id={props.input + "-component"}>

            <label htmlFor={props.input}>{props.label}</label>
            <input id={props.input} value={props.value} onChange={props.setValue}/>

        </div>
    );
}

function Text(props){
    return (<div id={props.name + "-textComponent"}>{props.value}</div>);
}

function Button(props){
    return (
    
        <div id={props.name + "-component"}>
            <button id={props.name} onClick={props.clickEvent}>{props.name}</button>
        </div>
    );
}

function Education(){

    const [schoolName, setSchoolName] = React.useState("");
    
    const [curriculum, setCurriculum] = React.useState("");
    const [duration, setDuration] = React.useState("");

    const [submitState, setSubmitState] = React.useState(false);

    function handleClick(event){

        event.preventDefault();

        if(event.target.id === "Edit"){
            console.log("Edit Mode!");
        
        }else if(event.target.id === "Submit"){
            console.log("Submitted!");
        }

        setSubmitState((prevValue) => !(prevValue));
    }

    if(!submitState){

        return (

            <div id="education">

                <div id="top-section">
                
                    <Field 
                        
                        key="0" 
                        
                        label="School:" 
                        input="school" 

                        value={schoolName}
                        setValue={(event) => setSchoolName(event.target.value)}
                    />

                    <Field 
                        
                        key="1" 
                        
                        label="Curriculum:" 
                        input="curriculum" 

                        value={curriculum}
                        setValue={(event) => setCurriculum(event.target.value)}
                    />

                    <Field 
                    
                        key="2" 
                        
                        label="Duration:" 
                        input="duration"

                        value={duration}
                        setValue={(event) => setDuration(event.target.value)}
                    />
                
                </div>

                <Button key="3" name="Submit" clickEvent={handleClick} />
            
            </div>
        );
    
    } else if(submitState){

        return (

            <div id="education">

                <div id="top-section">

                    <Text key="0" name="school" value={schoolName} />
                    <Text key="1" name="curriculum" value={curriculum} />
                    <Text key="2" name="duration" value={duration} />

                </div>

                <Button key="3" name="Edit" clickEvent={handleClick} />

            </div>
        );

    }
}

export default Education;