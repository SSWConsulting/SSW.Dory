
param projectName string
param lastDeploymentDate string
param tags object

param location string = 'australiaeast'

module staticSiteStorage 'StaticSiteStorage.bicep' = {
  name: '${projectName}-static-site-${lastDeploymentDate}'
  scope: resourceGroup()
  params: {
    appName: projectName
    location: location
    tags: tags
  }
}
