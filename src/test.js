import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('rz0l2n6tskVAXmPlhYfd').collection('cartItems').doc('5A9OxvGVUpSZSUEG8Zg2')

firestore.doc('/users/rz0l2n6tskVAXmPlhYfd/cartItems/5A9OxvGVUpSZSUEG8Zg2')

firestore.collection('/users/rz0l2n6tskVAXmPlhYfd/cartItems')