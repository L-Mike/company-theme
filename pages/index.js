import Head from 'next/head';
import Layout from '../components/Layout';

const Index = () => (
    <html>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="../static/css/style.css"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <title>Bootstrap Theme Company Page</title>
    </Head>
    <body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
        <Layout />
        <script src="../static/js/script.js"></script>
    </body>
    </html>
);

export default Index;