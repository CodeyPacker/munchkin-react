import React from 'react'
import Header from '../components/Header'
import FeatureScores from '../components/FeatureScoresLayout'
import PlayerCounter from '../components/Player/PlayerCounter'
import Layout from '../layouts'

const BattlePage = () => (
  <div>
    <Layout>
      <Header />
      <FeatureScores />
      <PlayerCounter modifier="oneShotItems"/>
    </Layout>
  </div>
)

export default BattlePage
