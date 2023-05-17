import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import React from "react";
import { connect } from "react-redux";
import Auth from "components/auth/Auth";
function AuthPage({
}){

    return(
        <FullWidthLayout>
            <Auth/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(AuthPage)