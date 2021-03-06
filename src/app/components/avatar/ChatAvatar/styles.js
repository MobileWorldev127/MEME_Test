import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';
import { color } from 'react-native-reanimated';


export default ScaledSheet.create({
    outerView: {
        borderColor: hexToRgba('#000000', 0.16),
        borderWidth: '3@s',
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view: {
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    avatar: {
        borderWidth: 0,
        // borderColor: colors.whitish
    }
});