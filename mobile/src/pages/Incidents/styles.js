import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 24
  },
  headerText: {
    fontSize: 14,
    color: "#737380"
  },
  headerTextBold: {
    fontWeight: "bold"
  },
  title: {
    fontSize: 32,
    marginVertical: 8,
    color: "#13131a",
    fontWeight: "bold"
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
    color: "#737380"
  },
  incidentList: {
    marginVertical: 32
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16
  },
  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold"
  },
  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 16,
    color: "#737380"
  },
  detailsBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  },
  detailsBtnText: {
    color: "#E02041",
    fontSize: 16,
    fontWeight: "bold"
  }
});
