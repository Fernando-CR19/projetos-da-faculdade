import { StyleSheet } from "react-native";
export default StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },

  body: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  title: {
    fontSize: 32,
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 18,
    borderRadius: 8,
    backgroundColor: "#0D47AB",

  },

  itemContent: {
    padding: 12,
    fontSize: 20
  },

  section: {
    marginTop: 4,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    textDecorationLine: 'underline',
  },

  label: {
    color: '#BFD7FF',
    fontSize: 11,
  },

  value: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },

  ref: {
    color: '#E0ECFF',
    fontSize: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#2C6BD3',
    marginVertical: 10,
    opacity: 0.7,
  },

  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: '#E0F7EC',
  },

  statusText: {
    color: '#0F9D58',
    fontSize: 11,
    fontWeight: '600',
  },

  resultRow: {
    flexDirection: 'row',
    marginTop: 6,
    columnGap: 8,
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 12,
    columnGap: 8,
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
  },

  actionText: {
    marginLeft: 6,
    color: '#0D47AB',
    fontSize: 12,
    fontWeight: '600',
  },

  ViewInTheBox: {
    paddingTop: 12,

  },

  ViewCalendar: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },

  ViewCalendarLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },

  TextCalendar: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontSize: 13
  },

  ViewOnMeasure: {
    position: 'absolute',
    opacity: 0,
    left: 12,
    right: 12
  },

  TouchableOpacity: {
    overflow: 'hidden',
    backgroundColor: "#0D47AB",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 18,
    borderRadius: 8,
  }

})