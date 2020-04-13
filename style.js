import {StyleSheet} from 'react-native';
import Cores from './colors/';
import Medidas from './boxModel'

export default StyleSheet.create({
  container : {
    flex: 1,
    paddingHorizontal: Medidas.containerPaddingH,
    marginTop: Medidas.containerMarginT,
    backgroundColor: Cores.accent,
  },
  contatoView : {
    padding: Medidas.cardPadding,
    borderRadius: Medidas.cardBorderRadius,
    backgroundColor: Cores.primary,
    marginVertical: Medidas.cardMargin,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  contatoTextInput: {
    width: Medidas.inputWidth,
    height: Medidas.inputHeight,
    backgroundColor: Cores.primary,
    borderColor: Cores.border,
    borderWidth: Medidas.inputBorderWidth,
    borderRadius: Medidas.inputBorderRadius,
    color: Cores.border,
    marginBottom: Medidas.inputMargin,
    padding: Medidas.inputPadding,

  },
  itemNaLista: {
    padding: Medidas.cardPadding,
    marginBottom: Medidas.cardMargin,
    borderRadius: Medidas.cardBorderRadius,
    backgroundColor: Cores.primary,
    shadowColor: Cores.shadow,
    shadowOffset: {
      width: Medidas.cardShadowWidth,
      height: Medidas.cardShadowHeight
    },
    shadowRadius: Medidas.cardShadowRadius,
    shadowOpacity: Medidas.cardShadowOpacity,
    elevation: Medidas.cardElevation,
  },
  listaTitle: {
    fontSize: Medidas.fontText,
    color: Cores.textPrimary,
    fontWeight: 'bold',
  },

  listaPhone: {
    marginTop: Medidas.cardTextMargin,
    fontSize: Medidas.fontText,
    color: Cores.textSecondary,
  },
  datailsButton: {
    borderRadius: Medidas.buttonBorderRadius,
    padding: Medidas.buttonPaddingPrimary,
    paddingLeft: Medidas.buttonPaddingSecondary,
    paddingRight: Medidas.buttonPaddingSecondary,
    backgroundColor: Cores.accent,
    alignItems: 'center'
  },
  detailsButtonText: {
    color: Cores.primary,
    fontWeight: 'bold',
    fontSize: Medidas.fontButton,
  },
  welcome: {
    marginTop: Medidas.titleMarginT,
    alignItems: 'center',
    marginTop: 100,
  },
  welcomeTitle: {
    fontSize: Medidas.fontTitle,
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Cores.primary,
  },

});
