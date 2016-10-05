import React from 'react'
import { connect } from 'react-redux'
import Channels from './Channels'
import { getChannel } from '../actions'

const App = ({ channels }) => {
  return (
    <div>
      <Channels />
      {channels}
    </div>
  )
}
const mapStateToProps = (state) => ({
  channels: state.channel.allIds
})

const mapDispatchToProps = (dispatch) => ({
  getChannel: (channelId) => dispatch(getChannel(channelId))
})

class RequestLayer extends React.Component {
  componentDidMount() {
    ['BeyondTheSummit', 'ybicanoooobov', 'dota2ruhub', 'Attackerdota'].map((channel) => {
      this.props.getChannel(channel)
    })
  }

  render() {
    return <App {...this.props}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestLayer);
