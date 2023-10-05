
param projectName string
param environment string
param lastDeploymentDate string = utcNow()
param tags object = {
  Deployed:'yes'
}

param location string = 'australiaeast'

module staticSiteStorage 'StaticSiteStorage.bicep' = {
  name: '${projectName}-static-site-${lastDeploymentDate}'
  scope: resourceGroup()
  params: {
    appName: projectName
    environment: environment
    location: location
    tags: tags
  }
}

output websiteStorageAccountName string = staticSiteStorage.name
