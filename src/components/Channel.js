import React from 'react';
import { connect } from 'react-redux';
import { getChannel } from '../reducers';

const Channel = ({ channel, stream, channelData }) => {
  let photo = stream ? stream.channel.logo : 'http://placehold.it/50x50'

  return (
    <li className='channel-item'>
      <img src={photo} width='50px' height='50px' className='img-rounded' alt='channel logo' />
      <div className='channel-detail'>
        <div className='channel-name'>
          { channel }
          <span className='channel-game'>
            { stream ? "Playing " + stream.game : "Offline" }
          </span>
        </div>
        <div className='channel-status'>
          { stream ?
            <a
              href={stream.channel.url}
              className='watch-channel'
              title={'Watch ' + channel + ' on Twitch.tv'}
              target='_blank'>
              <i className='fa fa-television'></i>
            </a>
            : null
          }
        </div>
      </div>
    </li>
  )
}

const mapStateToProps = (state, ownProps) => ({
  stream: getChannel.getStreamData(state, ownProps.channel),
});

export default connect(mapStateToProps)(Channel)
