import { View,Text,StyleSheet } from "react-native"








export const DateScreen = ({cot}) => {
    const mydates = cot?.createdAt
    const postday = new Date(mydates)
    const currentDate = new Date()
  const eachdate = (postday.getDate() +  " " + postday.toLocaleString('default', { month: 'long' }) + " " + postday.getFullYear())
  currentDate.setHours(0,0,0,0)


    return(

    
       
         <Text>

            
         </Text>
        

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#627e8b',
      padding: 16,
      borderRadius: 12,
      elevation:3,
    },
    listContent: {
      paddingBottom: 100,
    },
  
    entryContainer: {
      backgroundColor: '#d2cccc',
      color:'white',
      padding: 16,
      marginBottom: 12,
      borderRadius: 8,
      shadowColor: '#184b29',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
  
    entryTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    entryContent: {
      fontSize: 14,
      color: 'black',
    },

 
  });