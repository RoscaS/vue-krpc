<template>
  <SectionLayout title="Playground, yey">

  </SectionLayout>
</template>

<script>
  import SectionLayout from '../layouts/SectionLayout'
  import KRPC from '../../krpc/KRPC'

  export default {
    name: 'PlayGround',
    components: {SectionLayout},
    data: () => ({}),
    methods: {},
    mounted () {
    //   const options = {
    //       name: 'krpc.js-browser',
    //       host: '104.248.29.118',
    //       rpcPort: 50000,
    //       streamPort: 50001
    //   };
    //
    //   let krpc = new KRPC(options);
    //   krpc.load().then(async ()=>{
    //       let sc = krpc.services.spaceCenter;
    //       sc.stream('ut');
    //       let vessel = await sc.activeVessel;
    //       vessel.stream('situation');
    //       let bodyRF = await vessel.orbit.then((o)=>o.body).then((body)=>body.referenceFrame);
    //       let flight = await vessel.flight(bodyRF);
    //       flight.stream('surfaceAltitude');
    //       flight.stream('speed');
    //       let boundingBox = await vessel.boundingBox(await vessel.referenceFrame);
    //
    //       setInterval(async ()=>{
    //           let time = await sc.ut;
    //           let altitude = await flight.surfaceAltitude;
    //           let altitude2 = altitude+boundingBox[0][1];
    //           let meanAltitude = await flight.meanAltitude
    //           let situation = await vessel.situation;
    //           let speed = await flight.speed;
    //
    //           console.log(`#time: ${time.toFixed(2)}`);
    //           console.log(`#altitude top: ${altitude.toFixed(2)}`);
    //           console.log(`#altitude bottom: ${altitude2.toFixed(2)}`);
    //           console.log(`#altitude mean: ${meanAltitude.toFixed(2)}`);
    //           console.log(`#situation: ${situation}`);
    //           console.log(`#speed: ${speed.toFixed(2)}`);
    //
    //       }, 100);
    //   }).catch((e)=>console.error('Error connecting to Vessel:',e));
    },
  }

</script>

<style scoped>

</style>
