import React from 'react';
import CardActionsArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';

import CardHeader from '@material-ui/core/CardHeader';

const MusicItem = ({
  image, author, title,
}) => (
  <CardActionsArea>
    <CardHeader
      avatar={<Avatar src={image} />}
      subheader={author}
      title={title}
    />
  </CardActionsArea>
);

export default MusicItem;
