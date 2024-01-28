import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useState } from 'react'
import { questions } from '../util/HomeScreen-Content';
import { MaterialIcons } from '@expo/vector-icons';


const faqs = questions;
const Faq = () => {

    console.log("renderedFAQ");
    
    const [currentFaqIndex, setCurrentFaqIndex] = useState(0);

    const goToNextFaq = () => {
      if (currentFaqIndex < faqs.length - 1) {
        setCurrentFaqIndex((current) => current + 1);
      }
    }
  
    const goToPrevFaq = () => {
      if (currentFaqIndex > 0) {
        setCurrentFaqIndex((prevIndex) => prevIndex - 1);
      }
    }
  return (
    <>
     <View style={styles.card}>
        <Text style={styles.faq}>FAQ</Text>


        <View style={styles.faqNEw}>
         {faqs && < >
           <Abc currentFaqIndex={currentFaqIndex}/>
         </>
         }
        
        </View>
        <View style={styles.iconCard}>
        <MaterialIcons name="navigate-before" size={24} color="black" onPress={goToPrevFaq}  disabled={currentFaqIndex <= 0} style={currentFaqIndex <= 0 ? styles.officon : null}/>
        <MaterialIcons name="navigate-next" size={24} color="black" onPress={goToNextFaq} 
         disabled={currentFaqIndex >= faqs.length - 1} style={currentFaqIndex >= faqs.length - 1 ? styles.officon : null}/>
        </View>
      </View>
         </>
  )
}
//! only want this component to rerender but it doesn't
const Abc = memo(({ currentFaqIndex}) => {
    console.log("xyz");
    
    return (
      <>
        <View>
          <Text style={styles.question}>Question - {currentFaqIndex + 1} {faqs[currentFaqIndex].question}</Text>
        </View>
        <View>
          <Text style={styles.answer}>Answer - {faqs[currentFaqIndex].answer}</Text>
        </View>
      </>
    );
  });


export default Faq;

const styles = StyleSheet.create({
    question:{
        fontSize:18,
        fontWeight:"600"
      },
      answer:{
        fontSize:16,
        fontWeight:"400"
      },
      card:{
        height:500,
        borderColor:'black',
        borderWidth:3,
        borderRadius:16,
        justifyContent:'space-between',
        padding:6
      },
      iconCard:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderTopWidth:3,
        borderTopColor:'black',
        padding:5
      },
      officon:{
        color:"gray"
      },
      faqNEw:{
        justifyContent:'space-evenly',
        padding:20,
        alignItems:'flex-start',
        flex:1
      },
      faq:{
        alignSelf:'center',
        fontWeight:'700',
        color:'#6a6c6e',
        fontSize:20,
        borderBottomColor:'black',
        borderBottomWidth:3
      },
})