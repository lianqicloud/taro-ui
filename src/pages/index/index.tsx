import { Text, View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.warn('Page loaded.')
  })

  return (
    <View className="index">
      <Text>Hello world!</Text>
    </View>
  )
}
