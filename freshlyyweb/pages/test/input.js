import Header from '../../components/Header';
import theme from '../../styles/theme';
import { TextInput } from '../../components/Inputs';

export default function Home() {
  const inView = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: 'spring',
      },
    },
  };
  return (
    <>
      <Header />
      <main style={styles.main}>
        <TextInput type='date' error='' domName='Date' name='date' />
        <TextInput
          type='password'
          name='Password'
          placeholder='enter password'
          domName='Password'
          error=''
        />
        <TextInput
          type='text'
          name='Name'
          placeholder='enter name'
          domName='Name'
          error='Error'
        />
      </main>
    </>
  );
}

const styles = {
  backgroundGreen: {
    backgroundColor: theme.primaryShadeLighter,
    height: '80vh',
    width: '100%',
    position: 'absolute',
    zIndex: -1999,
  },
  main: {
    width: '70vw',
    margin: 'auto',
    display: 'grid',
    justifyContent: 'center',
  },
  sectionTitle: {
    textAlign: 'center',
    margin: 100,
  },
};
