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
                        <td><input type="text"  placeholder='Name'/></td>
                    </tr>
                    <tr>
                        <th>Email: </th>
                        <td><input type="text"  placeholder='Name'/></td>
                    </tr>
                    <tr>
                        <th>Message: </th>
                        <td><textarea></textarea></td>
                    </tr> 
                    <button>Submit</button>
                </table>
                
            </form>
           
        </div>
    );
};

export default Contact;