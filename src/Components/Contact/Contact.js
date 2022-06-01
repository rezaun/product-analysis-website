import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contact With Us</h1>
            <form >          
               
                <table>
                    <tr>
                        <th>Name: </th>
                        <td><input type="text"  placeholder='Your Name'/></td>
                    </tr>
                    <tr>
                        <th>Email: </th>
                        <td><input type="email"  placeholder='Your Email'/></td>
                    </tr>
                    <tr>
                        <th>Message: </th>
                        <td><textarea placeholder='Your Message'></textarea></td>
                    </tr> 
                    <tr>
                        <th>
                           
                        </th>
                        <td>
                             <button className='submitBtn' type='submit'>Submit</button>
                        </td>
                         
                    </tr>
                   
                </table>
                
            </form>
           
        </div>
    );
};

export default Contact;