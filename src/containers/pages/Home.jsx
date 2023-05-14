import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import React from "react";
import { connect } from "react-redux";
import PastMatches from "components/PastMatches";
function Home({
}){

    return(
        <FullWidthLayout>
            <PastMatches/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(Home)