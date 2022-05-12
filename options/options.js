import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  hr: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  container: { flex: 1, height: 100, padding: 13 },
  text: { color: "black", fontSize: 20 },
  payButton: { width: "40%", height: 50, alignSelf: "center" },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    margin: 5,
    height: 50
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white"
  },
  payNow: { width: "40%", alignSelf: "center", backgroundColor: "#016f70" },
  inputField: {
    padding: 15,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: "#fff"
  },
  bold: { fontWeight: "600" },
  listItemContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: "#c9c9c9c9",
    borderRadius: 10
  }
})
const localOptions = {
  stripeSecretKey: "sk_test_xxxxxxxxxxx",
  merchantName: "Example Inc.",
  enableGooglePay: true,
  enableApplePay: true,
  merchantIdentifier: "merchant.com.crowdbotics.inaday",
  merchantCountryCode: "US",
  merchantCurrency: "USD",
  stripeTestEnv: true,
  stripePublishKey: "pk_test_xxxxxxxxxx"
}
export const globalOptions = {
  name: "jason_app_35177",
  url: "https://jason_app_35177.botics.co",
  api: "https://jason_app_35177.botics.co/api/v1"
}
export const modulesOptions = {
  "@modules/app-menu": { copy: "Routes available!" },
  "@modules/payments": {
    title: "App Menu",
    copy: "Routes available",
    styles: styles,
    localOptions: localOptions
  }
}
