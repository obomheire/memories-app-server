import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles'
// import { useDispatch } from 'react-redux'
// import { deletePost  } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles()
    //  const {card, media, overlay, overlay2, details, title, cardActions } = useStyles()
    //  const dispatch = useDispatch()

    const defaultImage = (image) =>{
        if (image) return image
        else image = "https://images.theconversation.com/files/76631/original/image-20150331-1256-mz95ed.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        return image
    }
    
    return (
        <Card className={classes.card}>
        {/* <CardMedia className={classes.media} image={ post.selectedFile && post.selectedFile} title={post.title} /> */}
        <CardMedia className={classes.media} image={defaultImage(post.selectedFile)} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" >{post.tags.map((tag) => `#${tag}`)} </Typography>
      </div>
     <Typography className={classes.title} variant="h5" gutterBottom >{post.title}</Typography>
      <CardContent>
        <Typography variant="h5" gutterBottom >{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => {}}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
        </Card>
    );
};

export default Post;
