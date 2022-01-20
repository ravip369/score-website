import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    score: {
        width: '100vw',
        height: '52.57vw',
        backgroundImage: 'url(/images/homeBackground.png)',
        backgroundSize: 'contain',
        marginTop:'-1%'
    },
    heading: {
        fontSize: '8vw',
        fontFamily: 'Source Sans Pro',
        fontStyle: 'normal',
        fontWeight: '900',
        color: '#FFC220',
        marginBottom:'-2%'
    },
    iit: {
        fontSize:'4vw',
        fontFamily: 'Source Sans Pro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#FFFFFF',
        marginBottom:'1.5%'
    },
    desc: {
        fontSize:'1.7vw',
        fontFamily: 'Roboto',
        fontWeight: '300',
        color: '#FFFFFF',
        textAlign: 'justify',
        marginBottom:'2.7%'
    },
    homeButton: {
        marginRight:'1.5%'
    },
    learnCase: {
        padding: '0.5%',
        background: '#FFC220',
    },
    knowMoreCase: {
        padding: '0.5% 1%',
        boxSizing:'border-box',
        border: '1px solid #FFC220',
        background: 'transparent',
    },
    enactus: {
        fontFamily: 'Source Sans Pro',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '6vw',
        color: '#FFC220',
        textTransform: 'uppercase',
        marginBottom:'-2%'
    },
    iitRoorkee: {
        fontFamily: 'Source Sans Pro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '4vw',
        color: '#191C4D',
    },
    imgEnactus: {
        width:'76%',
        height: 'auto',
        borderRadius: '18px',
    },
    descEnactus: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '1.4vw',
        color: '#191C4D',
        marginBottom: '2.5%',
        textAlign:'justify'
    },
    btnKnow: {
        padding:'1% 2%',
        background:'#FFC220',
        borderRadius: '6px',
    },
    btnText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '1.5vw',
        textTransform: 'none'
    },
}));