
@minLength(3)
@maxLength(21)
param appName string

param location string

@allowed([
  'Standard_LRS'
  'Standard_GRS'
  'Standard_ZRS'
  'Standard_RAGRS'
])
param skuName string = 'Standard_LRS'

// ADD WHEN WE HAVE A CUSTOM DOMAIN NAME

@description('Resource tags for organizing / cost monitoring')
param tags object




resource staticSiteStorage 'Microsoft.Storage/storageAccounts@2019-06-01' = {
  name: replace(replace(toLower(take('${appName}', 24)), '-', ''), '_', '')
  location: location
  kind: 'StorageV2'
  tags: tags
  sku: {
    name: skuName
  }
  properties: {
    minimumTlsVersion: 'TLS1_2'
    accessTier: 'Hot'
    allowBlobPublicAccess: false
    networkAcls: {
      bypass: 'AzureServices'
      defaultAction: 'Allow'
    }
    supportsHttpsTrafficOnly: true
  }
}



resource webContainer 'Microsoft.Storage/storageAccounts/blobServices/containers@2021-06-01' = {
  name: '${staticSiteStorage.name}/default/$web'
  properties: {
    publicAccess: 'None'
  }
}



output websiteStorageAccountName string = staticSiteStorage.name
