import React from "react";
import {useForm} from "react-hook-form";

import "./contact.css";
import content  from "../../static";


const Contact = () => {

    const {register, handleSubmit, errors} = useForm(); // can use control or register
    const onSubmit = (data) => console.log(data);
    // console.log(register);
    //alert("submit");
    return(
        <div id="contact">
                <main>
                    <section>
                        <h1>Contact</h1>
                        <p>I would love to hear from you!</p>
                        <a href="https://t.me/Dodowbydesign"><i className="fab fa-telegram"></i></a>
                    </section>
                    <form onSubmit={()=>handleSubmit(onSubmit)}>
                        {content.inputs.map((input,key)=>{
                            return(
                                <div key={key}>
                                    <label htmlFor={input.label}>{input.label}</label>
                                    <input name={input.name}
                                           id={input.name}
                                           type={input.type}
                                           placeholder={input.label}
                                    />
                                </div>
                            );
                        })}
                        {content.textarea.map((textarea,key)=>{
                            return(
                                <div key={key}>
                                    <label htmlFor={textarea.label}>{textarea.label}</label>
                                    <textarea name={textarea.name}
                                              id={textarea.name}
                                              maxLength={textarea.maxLength}
                                              placeholder={textarea.placeholder}
                                    >
                                    </textarea>
                                </div>

                            );
                        })}
                        <button type="submit">Submit</button>
                    </form>

                </main>

        </div>
    )
}

export default Contact