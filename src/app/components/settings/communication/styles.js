import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        marginTop: '50@s',
        backgroundColor: '#FFFFFC',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%'
        // height: '100%'
    },
    topView: {
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        width: '100%',
        borderBottomColor: hexToRgba('#617FD2', 0.8)
    },
    topText: {
        color: hexToRgba('#1C3F4E', 0.55),
        fontFamily: 'Poppins-Bold',
        fontSize: '16@s'
    },
    //
    itemView: {
        height: '35@s',
        alignItems: 'center',
        marginTop: '10@s',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        borderBottomColor: hexToRgba('#617FD2', 0.8)
    },
    itemView1st: {
        width: '100%',
        justifyContent: 'center',
    },
    itemMainText: {
        color: hexToRgba('#1C3F4E', 0.80),
        fontFamily: fonts.montserratSemiBold,
        fontSize: '14@s',
        height: '30@s',
        width: '100%'
    },
    itemSubtext: {
        color: hexToRgba('#426371', 0.80),
        fontFamily: fonts.poppinsRegular,
        fontSize: '12@s'
    }
});