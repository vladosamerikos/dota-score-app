import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import React from "react";
import { connect } from "react-redux";
import PastMatches from "components/PastMatches";
import Chat from "components/chat/Chat";

function Home(){

    return(
        <FullWidthLayout>
            <PastMatches/>
            <Chat/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(Home)