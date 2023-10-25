import React from 'react';
import styled from "styled-components";
import "../css/style.css";

const Subscribe = () => {
    return (
        <div
        style={{
            fontWeight:'normal'
        }}>

        {/* <Text> */}
            <text>
                <h1>Needle Drops & Reviews.</h1>
                <h1>Subscribe to Vaultgeist!</h1>
                <p>Subscribe to our newsletter, and Elevate Your Vinyl Experience</p>
                <StyledForm>
                    <form>
                    <input type="text" name="user_email "placeholder='Whats your Email?'/>
                    <input type="submit" value="Send" />
                    </form>
                </StyledForm>
                


            </text>
        {/* </Text>   */}
        </div>
    );
};
export default Subscribe;


// Styles
const StyledForm = styled.div`
  width: 400px;
`;