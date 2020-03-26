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
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginVertical: 16
  },
  incidentProperty: {
    marginTop: 24,
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold"
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 16,
    color: "#737380"
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginVertical: 16
  },
  heroTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#13131a",
    lineHeight: 32
  },
  heroDescription: {
    fontSize: 16,
    color: "#737380",
    marginTop: 14
  },
  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  action: {
    backgroundColor: "#E02041",
    borderRadius: 8,
    height: 58,
    width: "48%",
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
