import React from 'react';
import styled from "styled-components";
import "../css/style.css";


const About = () => {
return (
	<div
	style={{
		
		fontWeight:'normal'
	}}
	>
	
	<Text>
	<text>
	<h1>Vaultgeist</h1>
	<p>Welcome to Vaultgeist, where the echoes of music's golden eras
		 resonate through the grooves of vinyl records. We are a passionate
		  community of music enthusiasts dedicated to celebrating the timeless
		   allure of analog sound.</p>

	<h1>Our Mission</h1>
	<p>At Vaultgeist, we believe that music transcends time and trends. 
		It's an art form that connects generations and cultures. 
		Our mission is to unearth the hidden gems, rediscover classics, 
		and explore the latest vinyl releases, providing our readers with 
		insightful and engaging reviews.</p>

	<h1>The Vinyl Experience</h1>
	<p>Vinyl records offer a unique, immersive listening experience that 
		digital formats simply can't replicate. From the warm crackle of 
		the needle dropping to the rich, full-bodied sound that fills the room, 
		every spin of a record is a journey through sonic history. 
		We are committed to preserving and cherishing this experience.</p>

	<h1>Expertise and Diversity</h1>
	<p>Our team of seasoned reviewers brings a diverse range of musical tastes 
		and backgrounds to the table. From rock to jazz, classical to hip-hop, 
		we cover a wide spectrum of genres. This diversity ensures that our 
		readers get a well-rounded perspective on the vinyl releases we feature.</p>
	
	<h1>Discover, Rediscover, and Connect</h1>
	<p>Vaultgeist is not just a blog; it's a platform for discovery. Whether you're a 
		seasoned collector or just starting your vinyl journey, we aim to be your 
		trusted guide. Through our reviews, recommendations, and features, 
		we hope to ignite your passion for music and help you forge deeper 
		connections with your favorite artists.</p>

	<h1>Community and Engagement</h1>
	<p>We believe that the joy of music is best when shared. That's why we encourage
		 our readers to join the conversation. Leave comments, share your own vinyl 
		 experiences, and connect with fellow music lovers. Together, we'll build a 
		 vibrant community that celebrates the power of music.</p>

	<h1>Stay tuned</h1>
	<p>Join us on this musical odyssey as we dive into the enchanting world of vinyl.
		 From in-depth album reviews to articles on the art of collecting, Vaultgeist 
		 is your go-to destination for all things vinyl. Subscribe to our newsletter 
		 and follow us on social media to stay updated with the latest releases and insights.
		Thank you for being a part of the Vaultgeist family. Let's keep the turntables spinning 
		and the music alive!</p>

	</text>
	</Text>
	</div>
);
};

export default About;


// Styles
const Text = styled.div`
  

  text {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    h1 {
      color:#00bfff;
    }

    p {
		color:#374F5B;
    }

  }
`;