import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Menu from "components/Menu"
import React from "react"
import { connect } from "react-redux"


const FullWidthLayout = ({children}) => {
    return(
        <>
            <Menu/>
            {children}
            <Footer/>
        </>
    )
}

const mapStateToProps = state => ({

})

export default connect (mapStateToProps,{

})(FullWidthLayout)