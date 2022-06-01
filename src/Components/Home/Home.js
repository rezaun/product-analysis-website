import React from 'react';
import homeImage from '../../Assets/Images/home-page.png'
import './Home.css'

const Home = () => {
    return (
        <>
         <h1>Welcome to Burger Review </h1>
        <div className='home'>
            <div className="home-title">
               
                <p>
                This place has become one of my favorite spots to get a quality burger. From the staff to the food, this location is the place to go for 
                lunch or dinner (I won't judge ).  If you are dining in, the service might seem slow but that is because all of the burgers are made to order. The main room 
                is where you order the food and can watch as the burgers are cooked on the grill. They also have a back room that has few projectors along with a bar for drinks.
                The burger I normally get is called "Hollywood" burger. The burger comes with Pepper Jack cheese, grilled jalapeños, grilled onions, and of course some crispy Bacon 
                (yummm). The meat is seasoned with a good balance of salt and pepper and the flavor is not overpowering the overall taste. When it comes out, the bun is branded with their
                 company logo, hence the name. The fries come out fresh and crispy with some seasoning salt which gives them a good flavor. The portion is good for a person and if you are not 
                 that hungry, you might have some left over. Overall, I recommend the 
                location for anyone that comes by Midlothian for lunch or dinner. You will soon find it to be one of your favorite burger joints as well." 
                </p>
            </div>
            <div className="home-image">
                <img src={homeImage} alt="" />
            </div>
        </div>
        <div className="home-review">
            <h1>Best Burger in The Town</h1>
        </div>
        </>
    );
};

export default Home;