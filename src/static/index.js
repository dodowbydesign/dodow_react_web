const content = {
    inputs:[
        {
            label: "Name",
            name: "name",
            type:"text",
        },
        {
            label: "Email",
            name: "email",
            type:"email",
        },
        {
            label: "Subject",
            name: "subject",
            type:"text"
        },
    ],
    textarea:[{
        label: "Message",
        name: "name",
        type:"text",
        maxLength:"250",
        placeholder:"Message max 250 characters",
    }]
};

export default content;