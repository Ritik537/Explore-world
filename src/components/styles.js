import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

  card: {
    display: 'flex', // Use flexbox to maintain equal height
    flexDirection: 'column', // Arrange children vertically
    height: '100%', // Set height to 100% to fill the container
  },
  cardContent: {
    flex: '1', // Allow content to grow and take remaining space
    overflow: 'auto', // Add scrollbar if content exceeds card height
  },
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
}));