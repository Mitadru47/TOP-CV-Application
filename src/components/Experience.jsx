import React from 'react';

function Field(props){

    return (

        <div id={props.name + "-component"}>

            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.name} value={props.value} onChange={props.setValue}/>

        </div>
    );
}

function Text(props){
    return <div id={props.name + "-textComponent"}>{props.value}</div>
}

function Button(props){
    return (
    
        <div id={props.name + "-component"}>
            <button id={props.name} onClick={props.handleClick}>{props.name}</button>
        </div>
    );
}

function Experience(){

    const [company, setCompany] = React.useState("Marcelles Wallas' Extermination Agency Pvt. Ltd.");
    const [job, setJob] = React.useState("Hitman");
    const [responsibilities, setResponsibilities] = React.useState("Shoot people in heads");

    const [startDate, setStartDate] = React.useState("01/01/1992");
    const [endDate, setEndDate] = React.useState("14/10/1994");

    const [submitState, setSubmitState] = React.useState(true);

    function clickEvent(event){

        if(event.target.id === "Submit"){
            console.log("Submitted!");

        } else if(event.target.id === "Edit") {
            console.log("Edit Mode!");
        }

        setSubmitState((prevValue) => !(prevValue));
    }

    if(!submitState) {
        return (

            <div id="experience">

                <div id="grid-sectionA">

                    <div id="sideA">
                    
                        <Field 

                            key="0"
                            
                            name="company" 
                            label="Company:"

                            value={company}
                            setValue={(event) => setCompany(event.target.value)}
                        />

                        <Field

                            key="1"

                            name="jobTitle"
                            label="Position:"

                            value={job}
                            setValue={(event) => setJob(event.target.value)}
                        />

                        <Field 

                            key="2"

                            name="responsibilities"
                            label="Responsibilities:"

                            value={responsibilities}
                            setValue={(event) => setResponsibilities(event.target.value)}
                        />

                    </div>

                    <div id="sideB">
                
                        <Field

                            key="3"

                            name="startDate"
                            label="Start Date:"

                            value={startDate}
                            setValue={(event) => setStartDate(event.target.value)}
                        />

                        <Field

                            key="4"

                            name="endDate"
                            label="End Date:"

                            value={endDate}
                            setValue={(event) => setEndDate(event.target.value)}
                        />
                
                    </div>

                </div>

                <Button key="5" name="Submit" handleClick={clickEvent}/>

            </div>
        );

    } else if(submitState) {
        return (

            <div id="experience">

                <div id="grid-sectionB">

                    <div id="sideA">

                        <Text key="0" name="company" value={company} />
                        <Text key="1" name="jobTitle" value={job} />
                        <Text key="2" name="responsibilities" value={responsibilities} />

                    </div>

                    <div id="sideB">

                        <Text key="3" name="startDate" value={startDate} />
                        <Text key="4" name="endDate" value={endDate} />

                    </div>

                </div>

                <Button key="5" name="Edit" handleClick={clickEvent} />

            </div>
        );
    }
}

export default Experience;