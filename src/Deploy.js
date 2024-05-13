import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './img/logowhite.svg'

const Deploy = () =>{
    return (
        <div className='userhome-container'>
            <div className='navbar'>
                <a href='/userhome'><img id="logo" src={logo}/></a>
                <nav className='pages'>
                    <ul>
                        <li>
                            <a href="/userhome">Home</a>
                        </li>
                        <li>
                            <a href="/documentation">Documentation</a>
                        </li>
                        <li>
                          <a href="/aboutus">About Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='deploy-content-container'>
                  <div id='text'>🎉Voila! Your Chatbot Is Ready For Deployment.</div> <br/>
                  <ul className="instruction-steps">
                      <li>
                        <h1>Include Files in HTML:</h1>
                        <p>
                          Add the following code to your HTML file:
                        </p>
                        <pre>
                          &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"&gt;&lt;/script&gt;<br/><br/>
                          &lt;script src="https://cdn.jsdelivr.net/gh/AbhiramVAnand/HelpAI/Website/chatbot.js"&gt;&lt;/script&gt;<br/><br/>
                          &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AbhiramVAnand/HelpAI/Website/chatbot.css"&gt;
                        </pre>
                      </li>
                      <li>
                        <h1>Add Chatbot Integration Tag:</h1>
                        <p>
                          Add the following code just before the closing body tag in your HTML:
                        </p>
                        <pre>
                          &lt;mybot&gt;&lt;/mybot&gt;
                        </pre>
                      </li>
                    </ul>
                    <a href='/userhome'><button>Done</button></a>
            </div>
        </div>
      );
};

export default Deploy;