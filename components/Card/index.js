import{Text,View,Image} from 'react-native'
import estilo from './style'
export default function Card({porcentagem,titulo,imagem,descricao}){
    return(
        <View style={estilo.cardTarefa}>
            <Image style={estilo.imagemCard} source={{ uri: imagem }} />
            <View style={{  marginLeft: 80,width:400 }}>
                 <Text style={estilo.tituloCard}>{titulo}</Text>
                <Text style={estilo.textoCard}>{descricao}</Text>
            </View>
            <Text style={estilo.porcentagemCard}>{porcentagem}</Text>
        </View>
    )
}