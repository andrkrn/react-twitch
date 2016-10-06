import React from 'react';
import { connect } from 'react-redux';
import Channel from './Channel';
import { getChannel } from '../actions'

const Channels = ({ channels }) => (
  <ul className='channels'>
    {channels.map((channel) =>
      <Channel
        key={channel}
        channel={channel} />
    )}
  </ul>
)

const getVisibleChannels = (channels, data, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return channels;
    case 'SHOW_ONLINE':
      return channels.filter(channel => data[channel].channel.stream);
    case 'SHOW_OFFLINE':
      return channels.filter(channel => !data[channel].channel.stream);
    default:
      return channels;
  }
}

const mapStateToProps = (state) => ({
  channels: getVisibleChannels(
    state.channel.allIds,
    state.channel.byId,
    state.channel.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  getChannel: (channelId) => dispatch(getChannel(channelId))
})

class RequestLayer extends React.Component {
  componentDidMount() {
    var channels = [
      'stewie2k', 'ybicanoooobov', 'dota2ruhub', 'Attackerdota', 'canceldota',
      'freecodecamp', 'sing2x'
    ]
    channels.map((channel) => {
      this.props.getChannel(channel)
    })
  }

  render() {
    return <Channels {...this.props}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestLayer);
